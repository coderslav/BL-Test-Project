import React from 'react';
import './Table.css';

export default function Table({ realtiesList, clickDetailsHandler, createButtonHandler }) {
    return (
        <section className='p-5'>
            <h1 className='pb-2 text-center'>REALTIES</h1>
            <div className='table-responsive'>
                <table className='table bg-white'>
                    <thead className='head text-light'>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Transaction type</th>
                            <th scope='col'>Realty type</th>
                            <th scope='col'>Publication date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {realtiesList.length > 0 ? (
                            realtiesList.map((realty) => (
                                <tr key={realty.id}>
                                    <td className='click-here' onClick={clickDetailsHandler} id={realtiesList.indexOf(realty)}>
                                        {realty.title}
                                    </td>
                                    <td>{realty.address}</td>
                                    <td>{realty.transaction_type}</td>
                                    <td>{realty.realty_type}</td>
                                    <td>{realty.pub_date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr></tr>
                        )}
                    </tbody>
                </table>
                <button className='btn btn-success' onClick={createButtonHandler}>
                    Add new realty
                </button>
            </div>
        </section>
    );
}
