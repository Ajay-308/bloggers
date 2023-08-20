
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://previews.123rf.com/images/peshkov/peshkov1910/peshkov191000662/133391293-creative-blogging-sketch-on-white-brick-wall-background-blog-and-media-concept-3d-rendering.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 2rem;
    font-weight:bold:
    background: #black;
`;

const Banner = () => {

    return (
        <Image>
            <SubHeading>AJAY SINGH</SubHeading>
        </Image>
    )
}

export default Banner;