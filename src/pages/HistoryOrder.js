/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Sidebar from '../components/Sidebar'
import TableHistoryOrder from '../components/TableHistoryOrder'



function HistoryOrder() {
  return (
    <div className="transactions overflow-auto h-screen">
        <Sidebar />
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <div className="row mt-30 mb-20">
                    <div className="col-lg-12 col-12 main-content">
                        <div id="list_status_title">
                            <a data-filter="*" href="#" className="btn btn-status rounded-pill text-sm btn-active me-3">All
                                Order</a>
                            <a data-filter="success" href="#"
                                className="btn btn-status rounded-pill text-sm me-3">Success</a>
                            <a data-filter="pending" href="#"
                                className="btn btn-status rounded-pill text-sm me-3">Pending</a>
                        </div>
                    </div>
                </div>
               <TableHistoryOrder />
            </div>
        </main>
    </div>
  )
}

export default HistoryOrder