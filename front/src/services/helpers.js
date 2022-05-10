import { createRealty, updateRealty, deleteRealty } from './APIconsumers';

export const disablePopUp = (seAlertPopUp) => {
    setTimeout(() => {
        seAlertPopUp({
            on: false,
            created: false,
            updated: false,
            deleted: false,
            warning: false,
            error: false,
            message: '',
        });
    }, 5000);
};

export const networkErrorHandler = (setAlertPopUp, res) => {
    setAlertPopUp({
        on: true,
        created: false,
        updated: false,
        deleted: false,
        warning: false,
        error: true,
        message: res.message,
    });
    disablePopUp(setAlertPopUp);
};

export const getISOlocalDateTime = (dateTimeNow) => {
    const ISOlocalDateTime = dateTimeNow.getFullYear() + '-' + ('0' + (dateTimeNow.getMonth() + 1)).slice(-2) + '-' + ('0' + dateTimeNow.getDate()).slice(-2) + 'T' + ('0' + dateTimeNow.getHours()).slice(-2) + ':' + ('0' + dateTimeNow.getMinutes()).slice(-2);
    return ISOlocalDateTime;
};

export const parseDateTime = (dateTimeToParse) => {
    const splitted = dateTimeToParse.split('T');
    const newDate = splitted[0].split('-').reverse().join('-');
    return `${newDate}, ${splitted[1]}:00`;
};

export const parseForm = (form, action, previousData) => {
    const dataToParse = new FormData(form);
    const parsedData = {};
    switch (action) {
        case 'create':
            for (let [key, value] of dataToParse) {
                parsedData[key] = value;
            }
            return parsedData;
        case 'update':
            for (let [key, value] of dataToParse) {
                if (key !== 'pub_date') {
                    if (value && previousData[key] !== value) {
                        parsedData[key] = value;
                    }
                } else {
                    if (value && previousData[key] !== parseDateTime(value)) {
                        parsedData[key] = value;
                    }
                }
            }
            return parsedData;
        default:
            return null;
    }
};

export const createData = (e, setSwitcher, setAlertPopUp) => {
    const newRealtyData = parseForm(e.currentTarget, 'create');
    createRealty(newRealtyData).then((res) => {
        if (res.status === 201) {
            setSwitcher({
                table: true,
                details: false,
            });
            setAlertPopUp({
                on: true,
                created: true,
                updated: false,
                deleted: false,
                warning: false,
                error: false,
                message: 'Realty was successfully created',
            });
            disablePopUp(setAlertPopUp);
        } else {
            networkErrorHandler(setAlertPopUp, res);
        }
    });
};

export const updateData = (realtiesList, e, setSwitcher, setAlertPopUp) => {
    const id = parseInt(e.currentTarget.id);
    const previousRealty = realtiesList.find((realty) => realty.id === id);
    const newRealtyData = parseForm(e.currentTarget, 'update', previousRealty);

    if (Object.keys(newRealtyData).length === 0) {
        setAlertPopUp({
            on: true,
            created: false,
            updated: false,
            deleted: false,
            warning: true,
            error: false,
            message: `Nothing to update`,
        });
        disablePopUp(setAlertPopUp);
    } else {
        updateRealty(newRealtyData, id).then((res) => {
            if (res.status === 200) {
                setSwitcher({
                    table: true,
                    details: false,
                });
                setAlertPopUp({
                    on: true,
                    created: false,
                    updated: true,
                    deleted: false,
                    warning: false,
                    error: false,
                    message: 'Realty was successfully updated',
                });
                disablePopUp(setAlertPopUp);
            } else {
                networkErrorHandler(setAlertPopUp, res);
            }
        });
    }
};

export const deleteData = (id, setSwitcher, setAlertPopUp) => {
    deleteRealty(id).then((res) => {
        if (res.status === 204) {
            setSwitcher({
                table: true,
                details: false,
            });
            setAlertPopUp({
                on: true,
                created: false,
                updated: false,
                deleted: true,
                warning: false,
                error: false,
                message: 'Realty was successfully deleted',
            });
            disablePopUp(setAlertPopUp);
        } else {
            networkErrorHandler(setAlertPopUp, res);
        }
    });
};

export const alertHandler = (alertState) => {
    if (alertState.updated || alertState.created || alertState.deleted) {
        return 'alert alert-success text-center position-absolute';
    } else if (alertState.warning) {
        return 'alert alert-warning text-center position-absolute';
    } else {
        return 'alert alert-danger text-center position-absolute';
    }
};
