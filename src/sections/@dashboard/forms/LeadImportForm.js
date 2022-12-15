import { useState } from 'react';
import FileUpload from 'react-material-file-upload';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { PATH_DASHBOARD } from '../../../routes/paths';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';

export default function LeadImportForm() {
  const [files, setFiles] = useState([]);

  return (
    <>
      <HeaderBreadcrumbs
        heading="Lead Import"
        links={[{ name: 'Leads', href: PATH_DASHBOARD.lead.root }, { name: 'Lead Import' }]}
      />
      <Box>
        <h1>Import File</h1>
        <FileUpload
          sx={{ width: 500, position: 'relative', left: 300, top: 60 }}
          value={files}
          onChange={setFiles}
          accept=".xlsx"
        />
        <Button sx={{ position: 'relative', borderRadius: 1, left: 100, top: 100 }} variant="contained">
          Save
        </Button>
      </Box>
    </>
  );
}
