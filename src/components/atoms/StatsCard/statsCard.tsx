import React from 'react';
import Box from '@mui/material/Box';
import "./statsCard.scss";

interface StatsCardProps {
  keyStat: number | string;
  keyStatEvolution: number;
  otherStat?: string;
  otherStatValue?: number;
  b2cStat?: number | string;
  b2bStat?: number | string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  keyStat,
  keyStatEvolution,
  otherStat,
  otherStatValue,
  b2cStat,
  b2bStat,
}) => {
  const isEuroStat =
    (typeof keyStat === 'string' && keyStat.includes('€')) ||
    (typeof b2cStat === 'string' && b2cStat.includes('€')) ||
    (typeof b2bStat === 'string' && b2bStat.includes('€'));

  return (
    <Box className="stats-container flex-column">
      {otherStat && (
        <div className='flex-column stats-margin'>
          <div className='other-stat-name'>{otherStat}</div>
          <div className='other-stat-value'>{otherStatValue}</div>
        </div>
      )}

      <div className='flex-row stats-margin'>
        <div className='key-stat'>
          {isEuroStat ? (
            <span className='stat-with-ht flex-row'>
              {keyStat} <span className='HT-stat'>HT</span>
            </span>
          ) : (
            keyStat
          )}
        </div>
        <div>
          {keyStatEvolution}%
        </div>
      </div>

      {b2bStat && (
        <div className='stats-margin'>
          {isEuroStat ? (
            <div className='business-stat-container-with-ht flex-column'>
              <div> <div className='b2-title'>B2C</div> <span className='stat-with-ht'> {b2cStat} <span className='HT-stat'>HT</span> </span></div>
              <div> <div className='b2-title'>B2B</div> <div > {b2bStat} <span className='HT-stat'>HT</span></div></div>
            </div>
          ) : (
            <div className='business-stat-empty flex-row'>
              <div>B2C: {b2cStat || '##'}</div>
              <div> B2B: {b2bStat || '##'}</div> 
            </div>
          )}
        </div>
      )}
    </Box>
  );
};

export default StatsCard;
