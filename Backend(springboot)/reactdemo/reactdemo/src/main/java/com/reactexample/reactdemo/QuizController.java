package com.reactexample.reactdemo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/quiz")
public class QuizController {
    private final QuizRepo repo;
    public QuizController(QuizRepo repo) {
        this.repo = repo;
    }
// GET ALL
    @GetMapping
    public List<Quiz> getAllQuiz(){
        return repo.findAll();
    }
    // CREATE
    @PostMapping
    public Quiz submitQuiz(@RequestBody Quiz q){
        int score = 0;
        if("correct".equals(q.getQ1())) score++;
        if("correct".equals(q.getQ2())) score++;
        if("correct".equals(q.getQ3())) score++;
        if("correct".equals(q.getQ4())) score++;
        if("correct".equals(q.getQ5())) score++;

        q.setScore(score);
        return repo.save(q);

    }
// UPDATE
    @PutMapping("/{id}")
    public Quiz updateQuiz(@PathVariable String id,
                              @RequestBody Quiz quiz){
        quiz.setId(id);
        return repo.save(quiz);
    }
// DELETE
    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable String id){
        repo.deleteById(id);
    }
}

