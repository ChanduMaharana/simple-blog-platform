package com.blog.service;

import com.blog.model.Comment;
import java.util.List;

public interface CommentService {
    Comment createComment(Comment comment, Long postId);
    List<Comment> getCommentsByPostId(Long postId);
}
