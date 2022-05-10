import React, { useEffect, useState } from 'react';
import { createData, updateData, deleteData, networkErrorHandler } from './services/helpers';
import { getRealties } from './services/APIconsumers';
import Table from './components/Table';
import DetailsCreateEdit from './components/DetailsCreateEdit';
import Alert from './components/Alert';

function App() {
    const [realtiesList, setRealtiesList] = useState([]);
    const [selectedRealty, setSelectedRealty] = useState(null);
    const [switcher, setSwitcher] = useState({
        table: true,
        details: false,
    });
    const [alertPopUp, setAlertPopUp] = useState({
        on: false,
        created: false,
        updated: false,
        deleted: false,
        warning: false,
        error: false,
        message: '',
    });

    useEffect(() => {
        getRealties().then((res) => {
            if (res.status === 200) {
                setRealtiesList(res.data);
            } else {
                networkErrorHandler(setAlertPopUp, res);
            }
        });
    }, [switcher.table]);

    const createHandler = (e) => {
        e.preventDefault();
        createData(e, setSwitcher, setAlertPopUp);
    };

    const updateHandler = (e) => {
        e.preventDefault();
        updateData(realtiesList, e, setSwitcher, setAlertPopUp);
    };
    const deleteHandler = (e) => {
        deleteData(e.currentTarget.id, setSwitcher, setAlertPopUp);
    };

    const clickDetailsHandler = (e) => {
        setSelectedRealty(realtiesList[e.currentTarget.id]);
        setSwitcher({
            table: false,
            details: true,
        });
    };

    const backButtonHandler = () => {
        setSwitcher({
            table: true,
            details: false,
        });
    };

    const createButtonHandler = () => {
        setSelectedRealty(null);
        setSwitcher({
            table: false,
            details: true,
        });
    };

    return (
        <>
            {alertPopUp.on && <Alert alertPopUp={alertPopUp} />}
            <div className='container d-flex align-items-center justify-content-center pt-3'>
                {switcher.details && <DetailsCreateEdit selectedRealty={selectedRealty} createHandler={createHandler} updateHandler={updateHandler} deleteHandler={deleteHandler} backButtonHandler={backButtonHandler} />}
                {switcher.table && <Table realtiesList={realtiesList} clickDetailsHandler={clickDetailsHandler} createButtonHandler={createButtonHandler} />}
            </div>
        </>
    );
}

export default App;
