import React from 'react';
import Box from '@mui/material/Box';
import CircularWithValueLabel from '../../atoms/ProgressBar/progressBar';
import LabelObjective from '../../atoms/LabelObjective/labelObjective';
import "./labelProgressBar.scss"

const LabelProgressBar : React.FC = () => {
    

    return (
        <Box className="label-progress-bar">
            <LabelObjective />
            <CircularWithValueLabel/>
        </Box>
        )
}

export default LabelProgressBar;