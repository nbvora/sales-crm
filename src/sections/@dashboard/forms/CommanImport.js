import PropTypes from 'prop-types';
import FileUpload from 'react-material-file-upload';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// redux

CommanImport.propTypes = {
  handleUplodFile: PropTypes.func,
  files: PropTypes.array,
  setFiles: PropTypes.func,
};

export default function CommanImport({ handleUplodFile, files, setFiles }) {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Typography variant="h3" sx={{ margin: 0, marginLeft: '86px' }} gutterBottom>
          Import File
        </Typography>
        <FileUpload
          sx={{ width: 500, position: 'relative', left: 300, top: 60 }}
          value={files}
          onChange={setFiles}
          accept=".xlsx"
        />

        <Button
          onClick={() => navigate(-1)}
          sx={{ position: 'relative', mx: 2, borderRadius: 1, left: 100, top: 100 }}
          variant="contained"
        >
          Cancel
        </Button>
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
