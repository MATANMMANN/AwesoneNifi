describe('AwesomeNifi', function() {

    it('AddNewRoute', function() {
      cy.visit('Awesome.com')
      cy.get("RouteName").type("Name")
      cy.get("RouteID").type("ID")
	  cy.get("ToWhichQueue").type("Queue")
      cy.get("SubmitRoute").click()
      cy.get("RouteName").contains("Name")
    })

    it('AddNewQueue' , function(){
      cy.visit('Awesome.com')
      cy.get("QueueName").type("Name")
      cy.get("QueueID").type("ID")
      cy.get("SubmitQueue").click()
      cy.get("QueueName").contains("Name")
      
    })

    it('RevertToOldConfig', function(){
      cy.visit('Awesome.com')
      cy.get("ServiceName").type("Name")
      cy.get("ConfigID").type("ID")
      cy.get("SubmitConfig").click()
      cy.get("ConfigID").contains("ID")
    })
      it('LoginAwesome',function(){
      cy.visit('Awesome.com')
      cy.get("username").type("name")
      cy.get("#pass").type("password")
      cy.get("#loginbutton").click()
      cy.get("username").contains("name")
    })
    it('ChangePage',function(){
      cy.get("OntherPage").click()
    })
	if('AddConfig'function(){
		const path = 'path.config'
		cy.get('[data-cy="file-input"]').attachFile(path);
		cy.get("submitNewConfig").click()
	})
  })