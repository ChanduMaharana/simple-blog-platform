package com.blog.security;

import java.sql.Date;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {
	private final String SECRET = "PXNE8rAaXMWVjerSNHQU9dbbDknz2UeoQwXE5jxXrf3FxnDWR89MOdn5YSSCzR2075cR6ozCDgbzRpH5H2JEmy3BVUiSTZuKHymrkPTvUHuLMUHllNJtAR5eU7cVcHJw4o3DcQdaDcdYpQbzfOsUrSgKVHZJpKNXyMGQZO1zOYa42z1hQkxd9Mae78gKbyc1JC2NzBm1efYdmRiqIRpwAzPe3KQ8YfvWQhcdSZqLVdTsOAkanf1dRLZaLa9gPLju";
	
	    public String generateToken(UserDetails userDetails) {
	        return Jwts.builder()
	                .setSubject(userDetails.getUsername())
	                .setIssuedAt(new Date(0))
	                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour
	                .signWith(SignatureAlgorithm.HS256, SECRET)
	                .compact();
	    }

	    public String extractUsername(String token) {
	        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token)
	                .getBody().getSubject();
	    }

	    public boolean validateToken(String token, UserDetails userDetails) {
	        return extractUsername(token).equals(userDetails.getUsername());
	    }
	}
