options(java.parameters = "-Xmx7000m")

library(dplyr)
library(GenomicRanges)
library(rtracklayer)

#### READING GTF
df <- read.table('extra-ref/exon-anno', header=T)
df <- df[!grepl(df$chr, pattern='chrUn'),]
i=1
results=data.frame()
for (gene in unique(df$gene)) {
	wdf <- df[df$gene==gene,]
	results[i,'chr'] <- unique(wdf$chr)[1]
	results[i,'start'] <- min(wdf$start)
	results[i,'end'] <- max(wdf$end)
	results[i,'gene'] <- gene
	results[i,'strand'] <- unique(wdf$strand)[1]
	i=i+1
}

results$type <- 'cds'

write.table(file='extra-ref/gene-anno', rbind(df,results), row.names=F, sep='\t', quote=F)
