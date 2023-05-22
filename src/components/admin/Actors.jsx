import React, { useState, useEffect } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { deleteActor, getActors, searchActor } from "../../api/actor";
import { useNotification, useSearch } from "../../hooks";
import AppSearch from "../form/AppSearch";
import ConfirmModal from "../models/ConfirmModal";
import UpdateActor from "../models/UpdateActor";
import NextAndPrevButton from "../NextAndPrevButton";

let currentPage = 0;
let limit = 20;

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [results, setResults] = useState([]);
  // const [pageNo, setPageNo] = useState(0);
  const [busy, setBusy] = useState(false);
  const [reachToEnd, setReachToEnd] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const { updateNotification } = useNotification();
  const { handleSearch, resetSearch } = useSearch();

  const fetchActors = async (pageNo) => {
    const { profiles, error } = await getActors(pageNo, limit);

    if (error) return updateNotification('error', error);

    if (!profiles.length) {
      currentPage = pageNo - 1;
      return setReachToEnd(true);
    }

    setActors([...profiles]);
  }

  const handleNextClick = () => {
    if (reachToEnd) return;
    currentPage += 1;
    fetchActors(currentPage);
  }

  const handleOnEditClick = (profile) => {
    setShowUpdateModal(true)
    setSelectedProfile(profile);
  }

  const handleDeleteConfirm = async (profile) => {
    setBusy(true);
    const { error, message } = await deleteActor(profile.id);
    setBusy(false);

    if (error) return updateNotification('error', error)
    updateNotification('success', message)

    setShowConfirmModal(false);
    fetchActors(currentPage);
  }

  const handleOnDeleteClick = (profile) => {
    console.log('Confirm Modal')
    setShowConfirmModal(true)
    setSelectedProfile(profile);
  }

  const handlePrevClick = () => {
    if (currentPage === 0) return;
    currentPage -= 1;
    fetchActors(currentPage);
  }

  const onCloseUpdateForm = () => {
    setShowUpdateModal(false);
  }

  const onCloseConfirmForm = () => {
    setShowConfirmModal(false);
  }

  const handleOnActorUpdate = (profile) => {
    const updatedActor = actors.map(actor => {
      if (profile.id === actor.id) {
        return profile;
      }
      return actor;
    })
    setActors([...updatedActor])
  }

  const handleOnSubmitSearch = (value) => {
    handleSearch(searchActor, value, setResults)
    //console.log(results);
  }

  const handleSearchFormReset = () => {
    resetSearch();
    setResults([]);
  }

  useEffect(() => {
    fetchActors(currentPage);
  }, []);

  //return null
  return (
    <div className="p-5">
      <div className="flex justify-end mb-5">
        <AppSearch
          placeholder="Search Actor"
          onSubmit={handleOnSubmitSearch}
          showResetIcon={results.length}
          onClick={handleSearchFormReset}
        />

      </div>

      < div className="grid grid-cols-4 gap-5 static" >
        {results.length ? results.map(actor => (
          <ActorProfile
            profile={actor}
            onEditClick={() => handleOnEditClick(actor)}
            onDeleteClick={() => handleOnDeleteClick(actor)}
            key={actor.id} />
        )) : actors.map(actor => (
          <ActorProfile
            profile={actor}
            onEditClick={() => handleOnEditClick(actor)}
            onDeleteClick={() => handleOnDeleteClick(actor)}
            key={actor.id} />
        ))}
      </div >
      <ConfirmModal
        visible={showConfirmModal}
        busy={busy}
        onClose={onCloseConfirmForm}
        onDeleteConfirm={() => handleDeleteConfirm(selectedProfile)}
        message="Are you sure?"
        subMessage="This action will remove this actor permanently"
      />
      <div>
        <UpdateActor
          visible={showUpdateModal}
          actor={actors}
          initialProfile={selectedProfile}
          onClose={onCloseUpdateForm}
          onSuccess={handleOnActorUpdate}
        />
      </div>
      {!results.length ?
        <NextAndPrevButton onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
        : null
      }
    </div>

  );
}

const ActorProfile = ({ profile, onEditClick, onDeleteClick }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnMouseEnter = () => {
    setShowOptions(true);
  };

  const handleOnMouseLeave = () => {
    setShowOptions(false);
  };

  const { name, about = "", avatar } = profile;

  if (!profile) return null;

  return (
    <div className="bg-white shadow-xl dark:shadow dark:bg-secondary rounded h-20 overflow-hidden static">
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="flex cursor-pointer relative z-0"
      >
        <img
          src={avatar}
          alt={name}
          className="w-20 aspect-square object-cover"
        />

        <div className="px-2">
          <h1 className="text-xl text-primary dark:text-white font-semibold">
            {name}
          </h1>
          <p className="text-primary dark:text-white">
            {about.substring(0, 50)}
          </p>
        </div>
        <Options visible={showOptions} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
      </div>
    </div>
  );
};

const Options = ({ visible, onDeleteClick, onEditClick }) => {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 bg-primary bg-opacity-25 backdrop-blur-sm flex justify-center items-center space-x-5">
      <button
        onClick={onDeleteClick}
        className="p-2 rounded-full bg-white text-primary hover:opacity-80 transition"
        type="button"
      >
        <BsTrash />
      </button>
      <button
        onClick={onEditClick}
        className="p-2 rounded-full bg-white text-primary hover:opacity-80 transition"
        type="button"
      >
        <BsPencilSquare />
      </button>
    </div>
  );
};
