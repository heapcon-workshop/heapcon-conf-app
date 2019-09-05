package net.msgnetconomy.demo.attendeeservice.repository;

import net.msgnetconomy.demo.attendeeservice.model.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendeeRepository extends JpaRepository<Attendee, Long> {

}
