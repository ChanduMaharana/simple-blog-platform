package com.blog.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blog.model.*;

public interface CommentRepository extends JpaRepository<Comment,Long>{
	List<Comment> findByPost(Post post);
}
