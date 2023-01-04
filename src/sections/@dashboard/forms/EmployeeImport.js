import { useState, useEffect } from 'react';
import CommanImport from './CommanImport';
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { getHeaderDetail, getTitle } from '../../../redux/slices/breadcrumbs';

export default function EmployeeImport() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const headerDetail = [
      { title: 'EmployeeList', path: PATH_DASHBOARD.employee.employeelist },
      { title: 'Import', path: null },
    ];
    const title = 'Employee';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);

  const handleUplodFile = () => {
    if (files.length !== 0) {
      console.log(files);
      dispatch({ type: sagaActions.UPLOAD_FILE, files });
    } else {
      console.log(files.length);
      console.log('file is emty');
    }
  };
  return (
    <>
      <CommanImport
        handleUplodFile={handleUplodFile}
        files={files}
        setFiles={setFiles}
        navigationLink={`${PATH_DASHBOARD.employee.employeelist}`}
      />
    </>
  );
}
