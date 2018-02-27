import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

describe('HeroesComponent', () => {
	let component: HeroesComponent;
	let fixture: ComponentFixture<HeroesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeroesComponent, HeroDetailComponent],
			imports: [FormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeroesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show a heroes list', () => {
		expect(component.heroes.length).toBe(10);
		expect(component.heroes[0].id).toBe(11);
		expect(component.heroes[0].name).toBe('Mr. Nice');
		expect(component.heroes[9].id).toBe(20);
		expect(component.heroes[9].name).toBe('Tornado');
	});
});
