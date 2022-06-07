import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_COMMENTS, QUERY_MYCOMMENTS, QUERY_SINGLE_COMMENT, spacePic_Data, QUERY_USER } from "../utils/queries"
import { ADD_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from "../utils/mutations"
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import './PictureStyle.css';






// rover page
function Picture() {

  const [newComment, setComment] = useState('');
  const [updatedComment, setUpdateComment] = useState('');
  const { loading: loading_PIC, data: data_PIC } = useQuery(spacePic_Data);
  const { loading: loading_comments, data: data_comments } = useQuery(QUERY_COMMENTS);
  const [removeComment, { errorRemove }] = useMutation(REMOVE_COMMENT)
  const [updateComment, { updateError }] = useMutation(UPDATE_COMMENT)
  const comments = data_comments?.getComments || [];
  const picture = data_PIC?.spacePic || {};
  const username = localStorage.getItem('username');
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const [editingItem, setEditingItem] = useState(null);

  // set the comment text
  const handleUpdate = async (item) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      alert("Please sign in first")
      return false;
    }

    try {
      setEditingItem(item)

      setUpdateComment(item.commentText)
      return true


    } catch (err) {
      console.error(err);
    }
  };

  // update comment
  const updateMyComment = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateComment({
        variables: { commentId: editingItem._id, commentText: updatedComment },
      });
      window.location.reload();

    } catch (err) {
      console.error(err);
    }
  }
  ///Remove Comment
  const remove = async (commentId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      alert("Please sign in first")
      return false;
    }

    try {
      const { data } = await removeComment({
        variables: { commentId },
      });
      window.location.reload();

    } catch (err) {
      console.error(err);
    }
  }

  //Add Comment
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      alert("Please sign in first");
      return false;
    }

    try {
      const { data } = await addComment({
        variables: { commentText: newComment },
      });

      setComment('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading_PIC || loading_comments) {
    return <div>Loading...</div>;
  } return (
    <>
      <div className="wrapper"> <h1 className="mx-auto d-flex justify-content-center">Astronomy Picture of the Day!</h1>
        <h5 className="text-center font-weight-bold">Date: {picture.date}</h5></div>

      <div className="text-center"><img src={picture.url} alt="pic of the day" height="500" width="500" />
        <h2 className="text-center"> {picture.title}</h2></div>

      <div className="explanation">
        <p>{picture.explanation}</p>


      </div>
      <div className="wrapper">

        <div className="list-group">
          <ul className="list-group">
            {comments.map((item, i) => (

              <li className="list-group-item" id="comments" key={item._id} value={item.commentAuthor}>
                {item.commentAuthor}:  {item.commentText}

                <button className="btn btn-info btn-block py-1" style={{ display: (username === item.commentAuthor ? "inline-block" : "none") }} onClick={(event) => handleUpdate(item)}  >Update</button> <button className="btn btn-info btn-block py-1" style={{ display: (username === item.commentAuthor ? "inline-block" : "none") }} onClick={(event) => remove(item._id)}>Remove</button>
                <form style={{ display: (item === editingItem ? "block" : "none") }}
                  className="flex-row justify-center justify-space-between-md align-center"
                  onSubmit={(event) => updateMyComment(event)}
                >
                  <div className="col-12 col-lg-9">
                    <input

                      value={updatedComment}
                      className="form-input w-100"
                      onChange={(event) => setUpdateComment(event.target.value)}
                    />
                  </div>

                  <div className="col-12 col-lg-3">
                    <button className="btn btn-info btn-block py-1" type="submit">
                      Update comment
                    </button>
                    <button className="btn btn-info btn-block py-1" type="submit">
                      Cancel
                    </button>
                  </div>

                </form>

              </li>

            ))}
          </ul>

          {Auth.loggedIn() ? (
            <>

              <form
                className="comment-box"
                onSubmit={handleFormSubmit}
              >
                <div className="commentfield">
                  <input
                    placeholder="Add your comment..."
                    value={newComment}
                    className="form-input w-100"
                    onChange={(event) => setComment(event.target.value)}
                  />
                </div>

                <div className="col-12 col-lg-3">
                  <button className="btn btn-info btn-block py-3" type="submit">
                    Add comment
                  </button>
                </div>

              </form>
            </>
          ) : (
            <p>
              You need to be logged in to share your thoughts. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
          )}
        </div>

      </div>
    </>
  );
}






export default Picture;



