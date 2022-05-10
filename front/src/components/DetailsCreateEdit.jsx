import React from 'react';
import { getISOlocalDateTime } from '../services/helpers';

export default function DetailsCreateEdit({ selectedRealty, createHandler, updateHandler, deleteHandler, backButtonHandler }) {
    return (
        <div className='card row mt-5' style={{ width: '50%' }}>
            <form onSubmit={selectedRealty ? updateHandler : createHandler} id={selectedRealty ? selectedRealty.id : 'noSelected'}>
                <h1 className='p-2 text-center'>{selectedRealty ? selectedRealty.title : 'New Realty'}</h1>
                <div className='card-body'>
                    <h5>Title</h5>
                    <input className='mb-2' name='title' maxLength='100' required={!selectedRealty} placeholder={selectedRealty ? selectedRealty.title : ''} style={{ width: '100%' }} />
                    <h5>Address</h5>
                    <textarea className='mb-2' name='address' maxLength='200' required={!selectedRealty} placeholder={selectedRealty ? selectedRealty.address : ''} style={{ width: '100%', height: '8rem' }} />
                    <h5>Transaction type</h5>
                    <select className='mb-2' name='transaction_type' style={{ width: '100%' }} defaultValue={selectedRealty ? selectedRealty.transaction_type : 'Rental'}>
                        <option value='Rental'>Rental</option>
                        <option value='Sale'>Sale</option>
                    </select>
                    <h5>Realty type</h5>
                    <select className='mb-2' name='realty_type' style={{ width: '100%' }} defaultValue={selectedRealty ? selectedRealty.realty_type : 'Office'}>
                        <option value='Office'>Office</option>
                        <option value='Land plot'>Land plot</option>
                        <option value='Warehouse'>Warehouse</option>
                        <option value='Retail'>Retail</option>
                        <option value='Coworking'>Coworking</option>
                    </select>
                    <h5>Publication date</h5>
                    {selectedRealty ? <input className='mb-5' name='pub_date' max={getISOlocalDateTime(new Date())} onFocus={(e) => (e.target.type = 'datetime-local')} onBlur={(e) => (e.target.value ? (e.target.type = 'datetime-local') : (e.target.type = 'text'))} placeholder={selectedRealty.pub_date} style={{ width: '100%' }} /> : <input className='mb-5' name='pub_date' max={getISOlocalDateTime(new Date())} required={!selectedRealty} type='datetime-local' style={{ width: '100%' }} />}
                    <div className='d-flex justify-content-between'>
                        <button type='button' className='btn btn-primary' onClick={backButtonHandler}>
                            Back
                        </button>
                        <button type='submit' className='btn btn-success'>
                            {selectedRealty ? 'Edit' : 'Create'}
                        </button>
                        {selectedRealty && (
                            <button type='button' className='btn btn-danger' onClick={deleteHandler} id={selectedRealty.id}>
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
