import { TestBed } from '@angular/core/testing';

import { RoomMembersService } from './room-members.service';

describe('RoomMembersService', () => {
  let service: RoomMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
