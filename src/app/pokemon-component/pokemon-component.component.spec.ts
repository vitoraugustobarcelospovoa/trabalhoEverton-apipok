import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponentComponent } from './pokemon-component.component';

describe('PokemonComponentComponent', () => {
  let component: PokemonComponentComponent;
  let fixture: ComponentFixture<PokemonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonComponentComponent]
    });
    fixture = TestBed.createComponent(PokemonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
