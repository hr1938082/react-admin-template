import { memo, } from 'react';
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

const LogoutDialog = ({ handleClose, open }) => {
  return (
    <Dialog onClose={handleClose} open={open} sx={{ '& .MuiDialog-paper': { width: 500 } }}>
      <DialogTitle>Logout</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are You sure you want to logout
        </DialogContentText>
        <DialogActions>
          <Button variant='contained'>
            Yes
          </Button>
          <Button variant='contained' onClick={() => handleClose()}>no</Button>

        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

LogoutDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}


export default memo(LogoutDialog);
