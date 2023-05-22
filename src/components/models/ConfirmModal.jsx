import React from 'react'
import { ImSpinner3 } from 'react-icons/im';
import ModalContainer from './ModalContainer'

export default function ConfirmModal({ visible, busy, onClose, onDeleteConfirm, message, subMessage }) {

    const commonClass = "px-3 py-1 text-white rounded";

    return (
        <ModalContainer
            visible={visible}
            ignoreContainer>
            <div className="dark:bg-primary bg-white rounded p-3 z-10">
                <h1 className="text-red-400 font-semibold">{message}</h1>
                <p className="text-secondary dark:text-white text-sm">{subMessage}</p>
                <div className="mt-5 flex items-center justify-center space-x-10">
                    {busy ? (
                        <p className="flex item-center space-x-2">
                            <ImSpinner3 className="animate-spin" />
                            <span>Please wait...</span>
                        </p>
                    ) : (
                        <>
                            <button type="button" onClick={onDeleteConfirm} className={commonClass + " bg-red-500"} > Yes</button>
                            <button type="button" onClick={onClose} className={commonClass + " bg-blue-500"} > No</button>
                        </>

                    )}
                </div>
            </div >
        </ModalContainer >
    )
}
