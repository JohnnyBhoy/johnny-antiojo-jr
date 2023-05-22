import React, { useState, useEffect } from "react";
import { getAppInfo } from "../../api/admin";
import { useNotification } from "../../hooks";
import AppInfoBox from "../AppInfoBox";
import LatestUploads from "../LatestUploads";

export default function Dashboard() {
  const [appInfo, setAppInfo] = useState({ movieCount: 0, actorCount: 0, userCount: 0 });

  const { updateNotification } = useNotification();

  const fetchAppInfo = async () => {
    const { error, appInfo } = await getAppInfo();

    if (error) return updateNotification('error', error)
    setAppInfo({ ...appInfo });

  }

  useEffect(() => {
    fetchAppInfo();
  }, [])

  return (
    <div className="grid grid-cols-3 gap-5 mx-5">
      <AppInfoBox title="Total Uploads" count={appInfo.movieCount + " Movies"} />
      <AppInfoBox title="Total Reviews" count={appInfo.actorCount + " Reviews"} />
      <AppInfoBox title="Total Users" count={appInfo.userCount + " Users"} />
      <LatestUploads />
      <div className='dark:bg-secondary bg-white shadow-xl p-5 rounded mt-2'>
        <h1 className='dark:text-white text-primary text-2xl font-semibold p-3 mb-2'>
          Top Rated
        </h1>
        <p className='text-xl dark:text-white text-primary ml-3'>
          Movies
        </p>
      </div>
    </div>
  );
}
