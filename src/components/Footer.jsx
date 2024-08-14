import React from 'react';
import FooterStyles from "../styles/footer.module.scss";
import { Pagination } from 'antd';

export default function Footer({ currentPage, totalResults, pageSize, handlePageChange }) {
  return (
    <div className={FooterStyles.container}>
      <Pagination
        className={FooterStyles.pageCom}
        current={currentPage}
        total={totalResults}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
}
