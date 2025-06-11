package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.blog.service.PostService;
import com.blog.model.*;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    @Autowired
    private PostService postService;

   @PostMapping
   public Post createPost(@RequestBody Post post) {
	   return postService.createPost(post);
   }

    @GetMapping
    public List<Post> getAll() {
        return postService.getAllPosts();
    }
}
