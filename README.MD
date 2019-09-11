*Helm Chart* 

pkg:
helm package heapcon-conf-app-chart -d build --debug

install:
helm install build/heapcon-conf-app-chart-1.0.0.tgz --name heapcon-conf-app --namespace playground --tls