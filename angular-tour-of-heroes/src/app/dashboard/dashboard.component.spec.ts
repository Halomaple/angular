import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

describe('DashboardComponent', () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashboardComponent, HeroesComponent, HeroDetailComponent],
				providers: [HeroService, MessageService],
				imports: [RouterTestingModule, FormsModule]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
