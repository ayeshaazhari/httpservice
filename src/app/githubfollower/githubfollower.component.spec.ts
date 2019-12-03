import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubfollowerComponent } from './githubfollower.component';

describe('GithubfollowerComponent', () => {
  let component: GithubfollowerComponent;
  let fixture: ComponentFixture<GithubfollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubfollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubfollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
