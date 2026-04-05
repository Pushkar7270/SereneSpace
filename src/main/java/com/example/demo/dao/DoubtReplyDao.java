package com.example.demo.dao;

import com.example.demo.model.DoubtReply;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


@Repository
public class DoubtReplyDao {
    public boolean saveReply(DoubtReply reply) {
        String sql = "INSERT INTO doubt_replies (reply_id, parent_id, author_id, reply_text, created_at) VALUES (?, ?, ?, ?, ?)";
         try (Connection connection = DatabaseConnection.getConnection();
               PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, reply.getReplyID());
            preparedStatement.setInt(2, reply.getParentId());
            preparedStatement.setString(3, reply.getAuthorId());
            preparedStatement.setString(4, reply.getReplyText());
            preparedStatement.setTimestamp(5, Timestamp.valueOf(reply.getCreatedAt()));
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    public List<DoubtReply> getRepliesByDoubtId(int parentId){
        List<DoubtReply> replies = new ArrayList<>();
        String sql = "SELECT * FROM doubt_replies WHERE parent_id = ? ORDER BY created_at ASC";
        try(Connection connection = DatabaseConnection.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(sql)){
            preparedStatement.setInt(1, parentId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
               DoubtReply reply = new DoubtReply();
               reply.setReplyID(resultSet.getInt("reply_id"));
               reply.setParentId(resultSet.getInt("parent_id"));
               reply.setAuthorId(resultSet.getString("author_id"));
               reply.setReplyText(resultSet.getString("reply_text"));
               java.sql.Timestamp ts = resultSet.getTimestamp("created_at");
               if(ts!= null){
                   reply.setCreatedAt(ts.toLocalDateTime());
               }
               replies.add(reply);
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }
        return replies;
    }
}
