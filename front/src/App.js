import React, { useEffect, useState } from 'react';
import { createData, updateData, deleteData, networkErrorHandler } from './services/helpers';
import { ascSorting, dscSorting } from './services/sorting';
import { getRealties } from './services/APIconsumers';
import Table from './components/Table';
import DetailsCreateEdit from './components/DetailsCreateEdit';
import Alert from './components/Alert';

function App() {
    const [realtiesList, setRealtiesList] = useState([]);
    const [selectedRealty, setSelectedRealty] = useState(null);
    const [order, setOrder] = useState({
        type: '',
        by: '',
    });
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

    const sortingHandler = (col) => {
        let sorted;
        if (order.type === 'ASC' || !order.type || order.by !== col) {
            sorted = ascSorting(col, realtiesList);
            setRealtiesList(sorted);
            setOrder({
                type: 'DSC',
                by: col,
            });
        } else if (order.type === 'DSC') {
            sorted = dscSorting(col, realtiesList);
            setRealtiesList(sorted);
            setOrder({
                type: 'ASC',
                by: col,
            });
        }
    };

    return (
        <>
            {alertPopUp.on && <Alert alertPopUp={alertPopUp} />}
            <div className='container d-flex align-items-center justify-content-center pt-3'>
                {switcher.details && <DetailsCreateEdit selectedRealty={selectedRealty} createHandler={createHandler} updateHandler={updateHandler} deleteHandler={deleteHandler} backButtonHandler={backButtonHandler} />}
                {switcher.table && <Table realtiesList={realtiesList} order={order} clickDetailsHandler={clickDetailsHandler} createButtonHandler={createButtonHandler} sortingHandler={sortingHandler} />}
            </div>
        </>
    );
}

export default App;
