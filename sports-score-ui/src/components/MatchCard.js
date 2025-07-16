import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const MatchCard = ({ match }) => (
  <Card sx={{ position: 'relative', mb: 2, borderLeft: match.isLive ? '5px solid #ff1744' : undefined, background: '#32343a', color: 'white', borderRadius: 2 }}>
    <CardContent>
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} sx={{ minHeight: 100 }}>
        <Box sx={{ textAlign: 'center', minWidth: 90 }}>
          <Typography variant="subtitle1" fontWeight={500} sx={{ letterSpacing: 1 }}>{match.team1}</Typography>
          <Typography variant="h4" fontWeight={700} color="primary.main">{match.score1}</Typography>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ borderColor: '#444', mx: 1 }} />
        <Box sx={{ textAlign: 'center', minWidth: 90 }}>
          <Typography variant="subtitle1" fontWeight={500} sx={{ letterSpacing: 1 }}>{match.team2}</Typography>
          <Typography variant="h4" fontWeight={700} color="primary.main">{match.score2}</Typography>
        </Box>
      </Stack>
      <Typography variant="body2" align="center" sx={{ mt: 1, color: 'grey.400', fontWeight: 500 }}>VS</Typography>
      {match.isLive && (
        <Chip label="LIVE" color="error" size="small" sx={{ position: 'absolute', top: 12, right: 16, fontWeight: 700, fontSize: 16, px: 2 }} />
      )}
    </CardContent>
  </Card>
);

export default MatchCard;