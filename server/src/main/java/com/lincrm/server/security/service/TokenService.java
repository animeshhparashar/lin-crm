package com.lincrm.server.security.service;

import com.lincrm.server.security.model.UserSecurityDetail;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class TokenService {
    private final String SECRET_KEY = "6Z0LqmtoG7CobUkr5zbTNJvMsoQNJWhHINfagFnQhjMWt8Gn61EowrGNpMOMRNsz";
    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // Expiration time: 24hrs

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(UserSecurityDetail detail) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("firstname", detail.getFirstname());
        claims.put("lastname", detail.getLastname());

        return createToken(claims, detail.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public Boolean validateToken(String token, UserDetails adminDetails) {
        final String username = extractUsername(token);
        return (username.equals(adminDetails.getUsername()) && !isTokenExpired(token));
    }
}
