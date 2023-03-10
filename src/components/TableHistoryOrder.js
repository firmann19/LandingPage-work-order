import React from "react";
import { Link } from "react-router-dom";

function TableHistoryOrder() {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="" scope="col">
                Nama Peralatan
              </th>
              <th scope="col">Nomor Peralatan</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="list_status_item">
            <tr data-category="pending" className="align-middle">
              <th scope="row">
                <div className="game-title-header">
                  <p className="game-title fw-medium text-start color-palette-1 m-0">
                    Monitor
                  </p>
                </div>
              </th>
              <td>
                <p className="fw-medium color-palette-1 m-0">ASD123A</p>
              </td>
              <td>
                <div>
                  <span className="float-start icon-status pending"></span>
                  <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    Pending
                  </p>
                </div>
              </td>
              <td>
                <Link
                  to="/history-order-detail-page"
                  className="btn btn-status rounded-pill text-sm"
                >
                  Details
                </Link>
              </td>
            </tr>
            <tr data-category="success" className="align-middle">
              <th scope="row">
                <div className="game-title-header">
                  <p className="game-title fw-medium text-start color-palette-1 m-0">
                    CPU
                  </p>
                </div>
              </th>
              <td>
                <p className="fw-medium color-palette-1 m-0">AS4353NB</p>
              </td>
              <td>
                <div>
                  <span className="float-start icon-status success"></span>
                  <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    Success
                  </p>
                </div>
              </td>
              <td>
                <a
                  href="../member/transactions-detail.html"
                  className="btn btn-status rounded-pill text-sm"
                >
                  Details
                </a>
              </td>
            </tr>
            <tr data-category="pending" className="align-middle">
              <th scope="row">
                <div className="game-title-header">
                  <p className="game-title fw-medium text-start color-palette-1 m-0">
                    Keyword
                  </p>
                </div>
              </th>
              <td>
                <p className="fw-medium color-palette-1 m-0">AGCV431</p>
              </td>
              <td>
                <div>
                  <span className="float-start icon-status pending"></span>
                  <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    Pending
                  </p>
                </div>
              </td>
              <td>
                <a
                  href="../member/transactions-detail.html"
                  className="btn btn-status rounded-pill text-sm"
                >
                  Details
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableHistoryOrder;
