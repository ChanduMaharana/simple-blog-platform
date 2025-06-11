package com.blog.service;

import com.blog.model.Post;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface PostService {
    Post createPost(Post post);
    List<Post> getAllPosts();
}
