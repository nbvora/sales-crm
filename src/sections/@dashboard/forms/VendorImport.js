import { useState } from 'react';
import FileUpload from 'react-material-file-upload';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
// redux
import { dispatch } from '../../../redux/store';
import sagaActions from '../../../redux/actions';

export default function VendorImport() {
  const [files, setFiles] = useState([]);

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
      <Box>
        <h1>Import File</h1>
        <FileUpload
          sx={{ width: 500, position: 'relative', left: 300, top: 60 }}
          value={files}
          onChange={setFiles}
          accept=".xlsx"
        />
        <Button
          onClick={handleUplodFile}
          sx={{ position: 'relative', borderRadius: 1, left: 100, top: 100 }}
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </>
  );
}
