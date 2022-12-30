import { useState, useEffect } from 'react';
import CommanImport from './CommanImport';
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/paths';

export default function ProductImport() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const headerDetail = [
      { title: 'ProductList', path: PATH_DASHBOARD.user.cards },
      { title: 'Import', path: null },
    ];
    const title = 'Inventody-Managment';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);

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
