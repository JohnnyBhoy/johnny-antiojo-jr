import React, { useState } from 'react'
import { updateActor } from '../../api/actor';
import { useNotification } from '../../hooks';
import ActorForm from '../form/ActorForm';
import ModalContainer from './ModalContainer';

export default function UpdateActor({ visible, onClose, initialProfile, onSuccess }) {
    const [busy, setBusy] = useState(false);

    const { updateNotification } = useNotification();

    const handleSubmit = async (data) => {
        setBusy(true);
        const { error, actor } = await updateActor(initialProfile.id, data);
        setBusy(false);
        if (error) return updateNotification("error", error);

        onSuccess(actor);
        updateNotification("success", "Actor updated successfully.");
        onClose();
    };

    return (
        <ModalContainer visible={visible} onClose={onClose} ignoreContainer>
            <ActorForm
                onSubmit={!busy ? handleSubmit : null}
                title="Update New Actor"
                btnTitle="Update"
                busy={busy}
                initialProfile={initialProfile}
            />
        </ModalContainer>
    );
}
