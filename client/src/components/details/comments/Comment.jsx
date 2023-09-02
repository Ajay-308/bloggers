import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";
import axios from "axios"
import swal from 'sweetalert';

const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)

    const removeComment = async () => {
        // try {
        //     await API.deleteComment(comment._id);
        //     setToggle(prev => !prev);
        // } catch (error) {
        //     // Handle the error here
        //     console.error("An error occurred while deleting the comment:", error);
        // }
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `https://backbone1.onrender.com/comment/delete/${comment._id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('accessToken'),
            },
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setToggle(prev => !prev);
                swal("good job!", 'Comment Deleted SuccessFully', "success");
                // navigate('/')
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                {comment.name === account.username && <DeleteIcon onClick={() => removeComment()} />}
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;
