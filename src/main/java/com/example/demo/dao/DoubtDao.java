package com.example.demo.dao;

import com.example.demo.model.Doubt;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpHeaders.FROM;
@Repository
public class DoubtDao {
    public boolean saveDoubt(Doubt doubt){
        String sql = "INSERT INTO doubts (doubt_id, author_id, created_at, question_text, image_url, is_resolved) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql)) {

            preparedStatement.setInt(1, doubt.getDoubtId());
            preparedStatement.setString(2, doubt.getAuthorId());
            preparedStatement.setTimestamp(3, Timestamp.valueOf(doubt.getCreatedAt()));
            preparedStatement.setString(4, doubt.getQuestionText());
            preparedStatement.setString(5, doubt.getImageUrl());
            preparedStatement.setBoolean(6, doubt.isResolved());

            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
    public List<Doubt> getAllDoubts() {
        List<Doubt> doubtList = new ArrayList<>();
        String sql = "SELECT * FROM doubts ORDER BY created_at DESC";

        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(sql);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            while (resultSet.next()) {
                Doubt doubt = new Doubt();
                doubt.setDoubtId(resultSet.getInt("doubt_id"));
                doubt.setAuthorId(resultSet.getString("author_id"));
                Timestamp ts = resultSet.getTimestamp("created_at");
                if (ts != null) {
                    doubt.setCreatedAt(ts.toLocalDateTime());
                }

                doubt.setQuestionText(resultSet.getString("question_text"));
                doubt.setImageUrl(resultSet.getString("image_url"));
                doubt.setResolved(resultSet.getBoolean("is_resolved"));

                doubtList.add(doubt);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return doubtList;
    }
}
