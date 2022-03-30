import { Typography, styled } from "@mui/material"

const ItemContainer = styled('div')({
    height: '220px',
    width: '260px',
    backgroundColor: 'black',
    opacity: 0.8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #FFFFFF',
    borderRadius: '15px',
    boxShadow: '2px 2px 20px #FFCC00',
    cursor: 'pointer',
    transition: 'transform 1s ease',
    '&:hover': {
        transform: 'translateY(-20px)'
    },
})

const Title = styled(Typography)({
    marginTop: '5%',
    marginBottom: '5%',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
})

const ItemImage = styled('img')({
    height: '60%',
})

const CarouselItem = ({ title, image }) => {
    return (
        <ItemContainer>
            <Title>{title}</Title>
            <ItemImage src={image}/>
        </ItemContainer>
    )
}

export default CarouselItem