import { styled } from '@mui/material';

interface CharacterFrameProps {
  characterName: string,
  clicked: boolean
}

export const CharacterFrame = styled('div', {
  shouldForwardProp: (prop: string) =>
    !['rightSpace', 'widthAlignment'].includes(prop)
})<CharacterFrameProps>(({ characterName, clicked }) => ({
  borderStyle: 'solid',
  borderColor: 'rgb(0, 200, 130)',
  height: '100px',
  width: '100px',
  margin: '5px',
  backgroundImage: `url("/${characterName}.png")`,
  backgroundSize: 'contain',
  '&::after': {
    content: '""',
    backgroundColor: clicked ? 'rgba(0, 200, 130, 0.75)' : 'transparent',
    height: '100px',
    width: '100px',
    display: 'block'
  }
}))