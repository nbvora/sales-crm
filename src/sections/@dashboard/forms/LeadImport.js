import { useState } from 'react';
import CommanImport from './CommanImport';
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';

export default function LeadImport() {
  const [files, setFiles] = useState([]);

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
