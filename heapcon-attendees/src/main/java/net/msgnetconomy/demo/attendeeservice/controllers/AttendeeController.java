package net.msgnetconomy.demo.attendeeservice.controllers;

import net.msgnetconomy.demo.attendeeservice.model.Attendee;
import net.msgnetconomy.demo.attendeeservice.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AttendeeController {

    @Autowired
    private AttendeeRepository attendeeRepository;

    @GetMapping("/attendees")
    public ResponseEntity<List<Attendee>> getAttendees() {
        return new ResponseEntity<>(attendeeRepository.findAll(), HttpStatus.OK);
    }

}
