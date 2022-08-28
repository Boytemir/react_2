import React from 'react'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'

export const Table = (props) => {
  return (
    <table className="table table-striped table-hover">
        
        <TableHeader />
       
       {
        props.post.length  ? props.post.map((posts, index) => {
          return  <TableFooter remove = {props.remov}  key={posts.id} namber = {index+1} posts = {posts} />
         }) :   <h2> You should add some Post </h2>
          
       }
        
    </table>
        
    
  )
}
