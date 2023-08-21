
import { Box, styled, Typography, Link } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background: url(https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=1024x1024&w=is&k=20&c=08C4m9cMYF5lUQvtHVSd-X3vIGhuIFgmYbTSNP2AdL4=);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.linkedin.com/in/ajay-b94a13233/" color="inherit" target="_blank">
                        < LinkedIn />
                    </Link>
                    or send me an Email
                    <Link href="mailto:ajay3008rock@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
