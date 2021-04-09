import React from 'react';
import './App.scss';

const Post = ({ data }: { data: any }): JSX.Element => {
  return (
    <div>{data.title}</div>
  )
}

export default Post