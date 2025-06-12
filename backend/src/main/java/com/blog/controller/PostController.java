package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.blog.service.PostService;
import com.blog.model.*;

@RestController
@RequestMapping("/api/posts")
//@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
public class PostController {
    @Autowired
    private PostService postService;

   @PostMapping
   @PreAuthorize("isAuthenticated()")
   public Post createPost(@RequestBody Post post) {
	   return postService.createPost(post);
   }

    @GetMapping
    public List<Post> getAll() {
        return postService.getAllPosts();
    }
    
    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }

}
