import React from 'react';
import './Table.css';

export default function Table({ realtiesList, order, clickDetailsHandler, createButtonHandler, sortingHandler }) {
    return (
        <section className='p-5'>
            <h1 className='pb-2 text-center'>REALTIES</h1>
            <div className='table-responsive'>
                <table className='table bg-white'>
                    <thead className='head text-light'>
                        <tr>
                            <th scope='col' className='table-header' onClick={() => sortingHandler('title')}>
                                Title
                                <span style={{ width: '0.5rem', display: 'inline-block' }}>
                                    <i className={order.by === 'title' ? (order.type === 'ASC' ? 'bi bi-arrow-up-short' : 'bi bi-arrow-down-short') : ''} />
                                </span>
                            </th>
                            <th scope='col' className='table-header' onClick={() => sortingHandler('address')}>
                                Address
                                <span style={{ width: '0.5rem', display: 'inline-block' }}>
                                    <i className={order.by === 'address' ? (order.type === 'ASC' ? 'bi bi-arrow-up-short' : 'bi bi-arrow-down-short') : ''} />
                                </span>
                            </th>
                            <th scope='col' className='table-header' onClick={() => sortingHandler('transaction_type')}>
                                Transaction type
                                <span style={{ width: '0.5rem', display: 'inline-block' }}>
                                    <i className={order.by === 'transaction_type' ? (order.type === 'ASC' ? 'bi bi-arrow-up-short' : 'bi bi-arrow-down-short') : ''} />
                                </span>
                            </th>
                            <th scope='col' className='table-header' onClick={() => sortingHandler('realty_type')}>
                                Realty type
                                <span style={{ width: '0.5rem', display: 'inline-block' }}>
                                    <i className={order.by === 'realty_type' ? (order.type === 'ASC' ? 'bi bi-arrow-up-short' : 'bi bi-arrow-down-short') : ''} />
                                </span>
                            </th>
                            <th scope='col' className='table-header' onClick={() => sortingHandler('pub_date')}>
                                Publication date
                                <span style={{ width: '0.5rem', display: 'inline-block' }}>
                                    <i className={order.by === 'pub_date' ? (order.type === 'ASC' ? 'bi bi-arrow-up-short' : 'bi bi-arrow-down-short') : ''} />
                                </span>
                            </th>
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
