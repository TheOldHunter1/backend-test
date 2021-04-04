CREATE TEMPORARY TABLE tmpSalary (
		newSalary int NOT NULL,
		idEmployee int NOT NULL 
);

insert into tmpSalary() 
	select ROUND((e.salary * co.anual_adjustment)/ 100)+e.salary, e.id
	from employees  e 
	inner join countries c 
	on e.country_id = c.id
	inner join continents co
	on c.continent_id = co.id
	where salary <= 5000;


update employees
inner join tmpSalary on employees.id = tmpSalary.idEmployee
set employees.salary=tmpSalary.newSalary;

DROP TEMPORARY TABLE tmpSalary;

select * from employees;