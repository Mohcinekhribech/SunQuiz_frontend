import { TestBed } from '@angular/core/testing';

import { QuizzQuestionService } from './quizz-question.service';

describe('QuizzQuestionService', () => {
  let service: QuizzQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
