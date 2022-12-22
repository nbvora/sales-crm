import { useState, useEffect } from 'react';
import CommanImport from './CommanImport';
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

export default function StockImport() {
  const [files, setFiles] = useState([]);
  const headerDetail = [
    { title: 'StockList', path: PATH_DASHBOARD.user.list },
    { title: 'Import', path: null },
  ];
  const title = 'Inventory-Managment';
  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });

  const handleUplodFile = () => {
    if (files.length !== 0) {
      dispatch({ type: sagaActions.UPLOAD_FILE, files });
    } else {
      console.log('file is emty');
    }
  };
  return (
    <>
      <CommanImport handleUplodFile={handleUplodFile} files={files} setFiles={setFiles} />
    </>
  );
}
