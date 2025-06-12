package com.blog.controller;

import com.blog.model.Comment;
import com.blog.service.CommentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/{postId}")
    public ResponseEntity<Comment> createComment(
            @PathVariable Long postId, 
            @RequestBody Comment comment) {
        Comment createdComment = commentService.createComment(comment, postId);
        return ResponseEntity.ok(createdComment);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<List<Comment>> getCommentsByPostId(
            @PathVariable Long postId) {
        return ResponseEntity.ok(commentService.getCommentsByPostId(postId));
    }
}